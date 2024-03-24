"use client";

import Loader from "@components/Loader";
import ProfileCard from "@components/cards/ProfileCard";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Profile = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(
    () => {
      getUser();
    },
    [id]
  );

  return loading ? <Loader /> : <ProfileCard userData={userData} />;
};

export default Profile;
