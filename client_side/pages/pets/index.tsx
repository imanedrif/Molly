import Footer from '@/components/cors/Footer'
import Header from '@/components/cors/Header'
import PetCard from '@/components/homePage/imports/PetCard'
import { Card, Checkbox, Grid } from '@mui/material'
import React from 'react'
import PaginationComponent from '@/components/pets/PaginationComponent'

const Index = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { cities } = require("morocco-cities")
  const ages = [
    { text: "Age : 1 yo " },
    { text: "Age : 2 yo  " },
    { text: "Age : 6 months" },
    { text: "Age : less than  1 yo " },
    { text: "Age : less than  2 yo " },
    { text: "Age : less than 6 months" },
    { text: "Other" },
  ]

  const category = [
    { value: 'dog' },
    { value: 'cat' },
    { value: 'bird' },
    { value: 'rabbit' },
    { value: 'hamster' },
  ]
  const data = [
    {name:'Imane',gender:'Male',age:20,city:'Salé'},
    {name:'Yssine',gender:'Male',age:20,city:'Rabat'},
    {name:'Aiaijs',gender:'Male',age:20,city:'Asfi'},
    {name:'akpadpkapdkapk',gender:'Male',age:20,city:'Rabat'},
    {name:'asijaisj',gender:'Male',age:20,city:'Rabat'},
    {name:'Unknown',gender:'Male',age:20,city:'Kkk'},
    {name:'Simba',gender:'Male',age:20,city:'Ifrane'},
    {name:'LWE7CH',gender:'Male',age:20,city:'Tajsak'},
    {name:'MESSI',gender:'Male',age:20,city:'PP'},
    {name:'MARADONA',gender:'Male',age:20,city:'MM'},
    {name:'PELE',gender:'Male',age:20,city:'Rabat'},
    {name:'DAVID SILVA',gender:'Male',age:20,city:'NN'},
    {name:'ARAUJO',gender:'Male',age:20,city:'BB'},
    {name:'BERNARDO SILVA',gender:'Male',age:20,city:'VV'},
    {name:'DANI ALVES',gender:'Male',age:20,city:'..'},
    // waaa wlah ta d7kt mn niyti
    // HHHHHHHHHHHHHHHHHHHHHHHHHHHH 
  ]
  return (
    <>  
      <Header />
    <div className='pets'>
      <div className="parent">
        <div className="head">
          <p>Find your pet</p>
          <span>friend</span>
        </div>
        <Grid container spacing={0}>
          <Grid item xs={3} className='left'>
            <h2>Filter</h2>
            <div className="category">
              <div className="title">
                <p>Category</p><hr />
              </div>
              <Grid container className="checkboxContainer" >
                {category.map((i) => (
                  <Grid item xs={4}>
                    <div className='items'>
                      <Checkbox />
                      <p>{i.value}</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className="gender">
              <div className="title">
                <p>Gender</p><hr />
              </div>
              <Grid container className="checkboxContainer" >
                  <Grid item xs={4}>
                    <div className='items'>
                      <Checkbox />
                      <p>Female</p>
                      <Checkbox />
                      <p>Male</p>
                    </div>
                  </Grid>
              </Grid>
            </div>
            <div className="age">
              <div className="title">
                <p>Age</p><hr />
              </div>
              <Grid container className="checkboxContainer" >
                {ages.map((age) => (
                  <Grid item xs={4}>
                    <div className='items'>
                      <Checkbox />
                      <p>{age.text}</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
          <Grid xs={9} className='right'>
            <h2>Discover available pets</h2>
            <div >
            <PaginationComponent
          data={data}
        />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
    </>
  
  )
}

export default Index