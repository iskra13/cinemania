import { FC, useState } from "react";
import { AllDescriptionMovie } from "../../api/services/movies";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layouts/Layout/Layout";
import MovieLayout from "../../components/Layouts/MovieLayout/MovieLayout";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";

import Sidebar from "../../components/Sidebar/Sidebar";

type Params = {
  id: string;
};

const MoviePage: FC = () => {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<AllDescriptionMovie | null>(null);
  console.log(movie);
  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <MovieLayout
          movieID={id as string}
          setMovie={setMovie}
          url={`${movie ? movie.backdrop.url : ""}`}
        >
          <div>{id}</div>
        </MovieLayout>
      </MainLayout>
    </Layout>
  );
};

export { MoviePage };
