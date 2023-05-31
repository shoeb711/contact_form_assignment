import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js/auto';
import 'leaflet/dist/leaflet.css';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

interface HistoricalData {
  cases: Record<string, number>;
}

const ChartComponent: React.FC = () => {
  const [worldData, setWorldData] = useState<CountryData | null>(null);
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(
    null
  );

  useEffect(() => {
    const fetchWorldData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();
        setWorldData(data);
      } catch (error) {
        console.error('Error fetching world data:', error);
      }
    };

    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          'https://disease.sh/v3/covid-19/countries'
        );
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(
          'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
        );
        const data = await response.json();
        setHistoricalData(data);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    fetchWorldData();
    fetchCountryData();
    fetchHistoricalData();
  }, []);

  const lineGraphOptions: any = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'll',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Total Cases',
        },
      },
    },
  };

  const lineGraphData = {
    labels: historicalData
      ? Object.keys(historicalData.cases).map((date) => moment(date))
      : [],
    datasets: [
      {
        label: 'Total Cases',
        data: historicalData ? Object.values(historicalData.cases) : [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      {worldData && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>World Data</h2>
          <p>Total Cases: {worldData.cases}</p>
          <p>Total Deaths: {worldData.deaths}</p>
          <p>Total Recovered: {worldData.recovered}</p>
          <p>Total Active Cases: {worldData.active}</p>
        </div>
      )}

      {countryData.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h2>Country Data</h2>
          <MapContainer style={{ height: '400px', width: '100%' }}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {countryData.map((country) => (
              <Marker
                key={country.country}
                position={[country.countryInfo.lat, country.countryInfo.long]}>
                <Popup>
                  <div>
                    <h3>{country.country}</h3>
                    <p>Total Cases: {country.cases}</p>
                    <p>Total Deaths: {country.deaths}</p>
                    <p>Total Recovered: {country.recovered}</p>
                    <p>Total Active Cases: {country.active}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {historicalData && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Line Graph</h2>
          <Line data={lineGraphData} options={lineGraphOptions} />
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
