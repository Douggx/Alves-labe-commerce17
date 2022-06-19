import React, { Component } from 'react'
import styled from 'styled-components'
import CardProduto from './Components/CardProduto/CardProduto';
import CamisaNasa from './Imagens/Camisa-Nasa.png'
import CamisaLaika from './Imagens/Camisa-Laika.png'
import CamisaApollo from './Imagens/Camisa-Apollo.png'
import CamisaGalaxia from './Imagens/Camisa-Galaxia.png'
import CamisaPlaneta from './Imagens/Camisa-Planeta.png'
import CamisaAstronauta from './Imagens/Camisa-Astronauta.png'
import Frete from './Imagens/Frete.png'
import LogoTemporario from './Imagens/Logo-Temporario.png'

const GridLayout = styled.div`
height: 200vh;
width: 100vw;
max-width:100%;
display: grid;
grid-template-areas:"header header header"
                     "aside main nav"
                     "aside main nav"
                     "foot foot foot";
grid-template-rows: 1fr 4.5fr 5fr 1fr;
grid-template-columns: 1fr 5fr 1fr;

p {
  color: white;
}

h4 {
  color: white;
}

label {
  color: white;
}

overflow-x: hidden;
`;

const Header = styled.header`
grid-area: header;
background-color: #7d5fff;
display: grid;
justify-items: center;

> img {
  height: 10vh;
  margin-top: 10px;
  
}
`
const MiniAvisoPromocional = styled.div`
height: 4vh;
display:flex;
justify-content: center;
width: 100vw;
background-color: white;

P {
  color: black;
  font-weight: 500;
  margin-top: 8.5px;
}
`

const Footer = styled.footer`
background-color: #7d5fff;
border: 2px;
grid-area: foot;
`

const MenuFiltros = styled.aside`
grid-area: aside;
display: flex;
justify-content: flex-start;
justify-items: start;
padding: 30px;
background-color: #1b1464;
`
const H1Sessão = styled.h1`
margin: 0px;
color: white;
`

const H4Valores = styled.h4`
margin-bottom: 3px;
color: white;
`

const LabelStyled = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
justify-content: flex-start;
`

const LabelStyled2 = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
justify-content: flex-start;
`

const MenuCarrinho = styled.nav`
grid-area: nav;
display: flex;
padding: 20px;
background-color: #1b1464;
`
const AreaProdutos = styled.main`
grid-area: main;
background-color: #1B1464;
`

const DivProdutosLabel = styled.div`
padding: 0 16px;
display: flex;
justify-content: space-between;
align-items: center;
`

const DivDisplayProdutos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
padding: 10px;
`

const DivCarrinhoGrid = styled.div`
display: grid;
gap: 8px;
`


export default class App extends Component {
  state = {
    ArrayProdutos: [
      {
        id: "1",
        fotoProduto: CamisaNasa,
        nomeProduto: "Camiseta Nasa",
        descrição: "Camiseta com o logotipo da Agência Espacial Americana",
        preçoProduto: 100
      },
      {
        id: "2",
        fotoProduto: CamisaLaika,
        nomeProduto: "Camiseta Laika",
        descrição: "Homenagem do Astrodev ao primeiro ser vivo no espaço!",
        preçoProduto: 50
      },
      {
        id: "3",

        fotoProduto: CamisaGalaxia,
        nomeProduto: "Camiseta Galáxia",
        descrição: "Definação da váriavel Galáxia",
        preçoProduto: 70
      },
      {
        id: "4",

        fotoProduto: CamisaPlaneta,
        nomeProduto: "Camiseta Planeta",
        descrição: "Nosso planeta. Nossa casa!",
        preçoProduto: 200
      },
      {
        id: "5",

        fotoProduto: CamisaAstronauta,
        nomeProduto: "Camiseta Astronauta",
        descrição: "Relaxe com o Astrodev",
        preçoProduto: 250
      },
      {
        id: "6",

        fotoProduto: CamisaApollo,
        nomeProduto: "Camiseta Apollo 11",
        descrição: "Estampa em comemoração a primeira missão lunar",

        preçoProduto: 80
      },
    ],
    inputBuscaPorNome: "",
    valorMinimo: "",
    valorMaximo: "",
    ParametroOrdenação: ""
  }

  onChangeInputBuscaPorNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value })
  }

  onChangeInputValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
    console.log(this.state.valorMinimo)
  }

  onChangeInputValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
    console.log(this.state.valorMaximo)
  }

  onChangeParametroOrdenação = (event) => {
    this.setState({ ParametroOrdenação: event.target.value })
  }


  render() {


    return (
      <GridLayout>
        
        <Header> 
        <MiniAvisoPromocional><img src={Frete} alt='caminhao frete'/>⠀<p>Frete grátis para todo o Brasil apartir de R$200</p></MiniAvisoPromocional>
        <img src={LogoTemporario} alt='caminhao frete'/>
        </Header>

        <MenuFiltros>
          <div>
            <H1Sessão>Filtros</H1Sessão>
            <LabelStyled>
              <H4Valores>Valor Minimo (R$): </H4Valores>
              <input type="number" placeholder="10" id="minimo" name="minimo"
                min="0" max="10000" value={this.state.valorMinimo} onChange={this.onChangeInputValorMinimo} />
            </LabelStyled>
            <LabelStyled2>
              <H4Valores>Valor Máximo (R$): </H4Valores>
              <input type="number" placeholder="1000" min="0" max="10000" id='maximo' name='maximo' value={this.state.valorMaximo} onChange={this.onChangeInputValorMaximo} />
            </LabelStyled2>
            <LabelStyled2><H4Valores>Busca: </H4Valores></LabelStyled2>
            <input type="text" placeholder='Camisa...' value={this.state.inputBuscaPorNome} onChange={this.onChangeInputBuscaPorNome}></input>

          </div>
        </MenuFiltros>

        <MenuCarrinho>
          <div>
            <H1Sessão>Carrinho: </H1Sessão>

            <DivCarrinhoGrid>

            </DivCarrinhoGrid>

            <H4Valores>Valor total: </H4Valores>
          </div>
        </MenuCarrinho>

        <AreaProdutos>
          <DivProdutosLabel>
            <p>Quantidade de produtos: {this.state.ArrayProdutos.length}</p>

            <label>Ordenação:⠀
              <select
                value={this.state.ParametroOrdenação}
                onChange={this.onChangeParametroOrdenação}
                name="Ordenação">
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </label>
          </DivProdutosLabel>

          <DivDisplayProdutos>
            {this.state.ArrayProdutos
              .filter(produtos => {
                return produtos.nomeProduto.toLowerCase().includes(this.state.inputBuscaPorNome.toLowerCase()) ||
                  produtos.descrição.toLowerCase().includes(this.state.inputBuscaPorNome.toLowerCase())
              })
              .filter(produtos => {
                return this.state.valorMinimo === "" || produtos.preçoProduto >= this.state.valorMinimo
              })
              .filter(produtos => {
                return this.state.valorMaximo === "" || produtos.preçoProduto <= this.state.valorMaximo
              })
              .sort((produtoAtual, proximoProduto) => {
                return this.state.ParametroOrdenação * (produtoAtual.preçoProduto - proximoProduto.preçoProduto)
              })
              .map((produtos, indice) => {
                return <CardProduto
                  key={indice}
                  fotoProduto={produtos.fotoProduto}
                  nomeProduto={produtos.nomeProduto}
                  descrição={produtos.descrição}
                  preçoProduto={produtos.preçoProduto} />
              })
            }
          </DivDisplayProdutos>

        </AreaProdutos>

        <Footer></Footer>
      </GridLayout>
    )
  }
}

