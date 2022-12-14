import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Endpoints from '../src/config/Endpoints';
import { Schedule } from '../src/domain/models/apiSchema';
import ErrorAlert from '../src/presentation/elements/error';
import Loader from '../src/presentation/elements/loader';
import HomePageLayout from '../src/presentation/pages/home';

const Home: NextPage = () => {
  const [schedule, setSchedule] = useState<Array<Schedule>>([]);
  const [countryCode, setCountryCode] = useState("");
  const [countryCodeError, setCountryCodeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorWhileCatchingShows, setErrorWhileCatchingShows] = useState(false);

  useEffect(() => {
    if (countryCodeError) return;
    getUserCountryCode();
  }, [countryCodeError])

  useEffect(() => {
    if (errorWhileCatchingShows) return;
    if (!countryCodeError && countryCode && schedule.length < 1) {
      getAllShows(`${Endpoints.tvScheduleEndpoint}?country=${countryCode}`);
    }
    if (countryCodeError) {
      getAllShows(Endpoints.tvScheduleEndpoint);
    }
  }, [errorWhileCatchingShows, countryCode, countryCodeError, schedule.length])

  // calls  location api to get user's location info 
  // to pass to Maze api and show programm for user's country

  const getUserCountryCode = async () => {
    try {
      setLoading(true);
      const response = await fetch(Endpoints.locationApiEndpoint);
      const responseJson = await response.json();
      if (responseJson) {
        setLoading(false);
        setCountryCode(responseJson.country_code);
      }
    }
    catch (error) {
      setCountryCodeError(true);
      setLoading(false);
    }
  }

  const getAllShows = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson) {
        setLoading(false);
        setSchedule(responseJson);
      }
    } catch (error) {
      setLoading(false);
      setErrorWhileCatchingShows(true);
    }
  }

  if (loading) {
    return <Loader />
  }

  else if (errorWhileCatchingShows) {
    return <ErrorAlert />
  }

  else {
    return (
      <>
        <Head>
          <title>TV Bland</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePageLayout schedule={schedule} />
      </>
    )
  }
}

export default Home
