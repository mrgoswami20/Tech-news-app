import React,{useState} from 'react';
import './index.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function App() {

  let [value,setValue]=useState("");


  async function getApi(){
    let response=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json");
    let result=await response.json();
    console.log(result.articles);
    const img=result.articles.map((atr)=>{
      return (
        <MDBCard>
      <MDBCardImage src={atr.urlToImage} class="Card_Image" position='top' alt='...' />
      <MDBCardBody class="Card_Body">
        <MDBCardTitle>{atr.title}</MDBCardTitle>
        <MDBCardText class="Card_Text">
          {atr.description}
        </MDBCardText>
      <MDBBtn class="Read_More" href={atr.url}>Read more</MDBBtn>
      </MDBCardBody>
      <br></br>
    </MDBCard>
    
      )
    })
    setValue(img);
  }
  getApi();
  return <h1 class="Heading"> Tech News {value} </h1>
}

export default App;
