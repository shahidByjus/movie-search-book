import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Detail() {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`https://5000`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  return (
    <Container>
      {loading ? (
        <h4>loading....</h4>
      ) : (
        <>
          <Card>
            <CardBody>
              <CardTitle>{`Title : ${data.Title}`}</CardTitle>
              <CardText>{`Year : ${data.Year}`}</CardText>
              <CardText>{`Rated : ${data.Rated}`}</CardText>
              <CardText>{`Released : ${data.Released}`}</CardText>
              <CardText>{`Runtime : ${data.Runtime}`}</CardText>
              <CardText>{`Genre : ${data.Genre}`}</CardText>
              <CardText>{`Director : ${data.Director}`}</CardText>
              <CardText>{`Writer : ${data.Writer}`}</CardText>
              <CardText>{`Actors : ${data.Actors}`}</CardText>
              <CardText>{`Plot : ${data.Plot}`}</CardText>
              <CardText>{`Language : ${data.Language}`}</CardText>
              <CardText>{`Awards : ${data.Awards}`}</CardText>
            </CardBody>
          </Card>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </>
      )}
    </Container>
  );
}
