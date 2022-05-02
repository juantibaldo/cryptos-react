import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
    
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    };
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    };
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
        <div>
            <Precio>El precio es de: <span></span>{PRICE}</Precio>
            <Texto>El precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24hs <span></span>{CHANGEPCT24HOUR}</Texto>
            <Texto>Última actualización <span></span>{LASTUPDATE}</Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado