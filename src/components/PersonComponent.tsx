import React, { Key, FC, useEffect, useState } from "react";
import { getPersonById } from "../services/movieService";
import { Person } from "../types/Person";

const PersonComponent: FC<{ id: Key }> = ({ id }) => {
  const [personValue, setPersonValue] = useState<Person>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const personData = await getPersonById(Number(id));
        setPersonValue(personData);
      } catch (error) {
        console.error("Failed to fetch person:", error);
      }
    };

    fetchMovies();
  }, [id]);

  return (
    <div>
      <span>{personValue?.firstname}</span> <span>{personValue?.lastname}</span>
    </div>
  );
};

export default PersonComponent;
