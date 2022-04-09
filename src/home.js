import { Container,Row,Col } from "react-bootstrap";


function Home(){

    // let myimgstyle= {
    //     width:300,
    //     height:500,
    // }
    return (
         <Container className="my-5">
             <Row>
                 <Col  md={6}>
        <div class="jumbotron-fluid mb-5">
  <h1 class="display-4">Live Napa Style..!</h1>
  <blockquote class="blockquote text-right">
  <p class="mb-0 mt-3">“Clothes and manners do not make the man; but when he is made, they greatly improve his appearance.”</p>
  <footer class="blockquote-footer my-3"><cite title="Source Title"> – Arthur Ashe</cite></footer>
</blockquote>
  <hr class="my-4" />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
</Col>
<Col  md={6}>
<img className="img-height" src="https://images.pexels.com/photos/10327403/pexels-photo-10327403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>

</Col>
</Row>
</Container>
    )
}


export default Home;