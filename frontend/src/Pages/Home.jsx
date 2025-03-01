



import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DisplayCoupons from '../Components/DisplayCoupons';
import Pagination from '../Components/Pagination';
import axios from 'axios';
import { Backend_Url } from '../utils/Constants';


function Home() {
  const [searchParams,setSearchParams] = useSearchParams();
  const [totalCoupons,setTotalCoupons]=useState(0)
  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/?pageNo=${searchParams.get('pageNo')?searchParams.get('pageNo'):1}&search=${searchParams.get('search')?searchParams.get('search'):""}`); // Replace with your API URL
      //console.log(response.data);
      setCoupons(response.data.data);
      setTotalCoupons(response.data.length || 0);
    } catch (err) {
      setError("Failed to load coupons");
      //console.log(err.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [searchParams]);

  return (
    <>
      <DisplayCoupons loading={loading} coupons={coupons} error={error} />
      <Pagination setSearchParams={setSearchParams} totalCoupons={totalCoupons}/>
    </>
  );
}

export default Home;
