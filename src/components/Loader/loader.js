import {useState, useEffect} from 'react'
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10
        );
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Stack>
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
    );
  };

  export default Loader
