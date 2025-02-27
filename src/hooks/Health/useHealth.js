import { useState, useEffect } from 'react';

/**
 * useHealth Hook
 * ----------------
 * This custom hook is responsible for fetching and managing health-related data from an API.
 * It handles the state of data, loading, and error to manage API requests effectively.
 *
 * Features:
 * - Fetches data from a remote endpoint.
 * - Manages the loading state to indicate when the data is being fetched.
 * - Provides an error state in case of failed requests.
 * - Returns the fetched data, loading and error state, and a function to manually fetch the data again.
 *
 * Usage:
 * - Call `useHealth()` to access the health data, loading state, and any errors in a component.
 * - The hook also exposes `fetchData` for manual triggering of data fetching.
 *
 * Example:
 * const { data, loading, error, fetchData } = useHealth();
 * 
 * @returns {Object} Contains the health data, loading state, error message, and fetchData function.
 */
const useHealth = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://code-interview-challenge-default-rtdb.firebaseio.com/modules.json');
      if (!response.ok) {
        throw new Error('Failed to fetch modules');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData};
};

export default useHealth;
