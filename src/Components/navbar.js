import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar className='bg-dark p-3 ' variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.icon-icons.com/icons2/1146/PNG/96/1486485582-311arrow-film-movie-play-player-start-video_81177.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Movie App
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;