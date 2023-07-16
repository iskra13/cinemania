import { FC, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import MovieLayout from "../../components/MovieLayout/MovieLayout";

type Params = {
  id: string;
};

const MoviePage: FC = () => {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<any>({});

  return (
    <Layout>
      <MovieLayout movieID={id as string} setMovie={setMovie}>
        <div>{id}</div>
      </MovieLayout>
    </Layout>
  );
};

export default MoviePage;
