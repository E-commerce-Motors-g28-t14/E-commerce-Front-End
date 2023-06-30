import { useContext, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InitialsName from "../../components/InicialsName/InicialsName";
import Name from "../../components/Name/Name";
import { MainContainer, ContainerPageSeller, SectionSellerPage } from "./style";
import { UserContext } from "../../contexts/userContext";
import { CarsContext } from "../../contexts/carsContext";

const GeneralSellerPage = () => {
  const { selectedUserSeller } = useContext(UserContext);
  const { showSelectCarPage } = useContext(CarsContext);
  console.log(showSelectCarPage, selectedUserSeller);
  return (
    <>
      <ContainerPageSeller>
        <Header />
        <MainContainer>
          <div className="container-seller-car">
            <div className="container-data-seller">
              <InitialsName
                width={"104"}
                height={"104"}
                name={selectedUserSeller.name}
                fontSize={"36px"}
                color={selectedUserSeller.color}
              />
              <div className="container-seller-Name">
                <Name fontSize={"20px"} name={selectedUserSeller.name} />
                <span className="tag-seller">Anunciante</span>
              </div>
              <p>{selectedUserSeller.description}</p>
            </div>
          </div>
          <SectionSellerPage>
            <div className="container-lista-car-seller">
              <ul>
                {selectedUserSeller.cars &&
                selectedUserSeller.cars.length > 0 ? (
                  selectedUserSeller.cars.map((car, key) => (
                    <li key={key} onClick={() => showSelectCarPage(car.id)}>
                      <div>
                        <img
                          src={car.photos[0].imageLink}
                          alt={`Foto do carro ${car.model}`}
                        />
                      </div>
                      <div>
                        <span>{car.brand}</span>
                        <span>-</span>
                        <span>{car.model}</span>
                      </div>
                      <div>
                        <p>{car.description}</p>
                      </div>
                      <div>
                        <InitialsName
                          name={selectedUserSeller.name}
                          fontSize="16px"
                          height="32"
                          width="32"
                          color={selectedUserSeller.color}
                        />
                        <Name fontSize="14px" name={selectedUserSeller.name} />
                      </div>
                      <div className="info-car">
                        <div className="info-car-tags">
                          <span className="tag-car-info">{car.km} KM</span>
                          <span className="tag-car-info">{car.year}</span>
                        </div>

                        <span className="tag-car-info price">
                          R$ {parseInt(car.price).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    </li>
                  ))
                ) : (
                  <h4 className="info-message">
                    Anunciante não possui nenhum anúncio.
                  </h4>
                )}
              </ul>
            </div>
          </SectionSellerPage>
        </MainContainer>

        <Footer />
      </ContainerPageSeller>
    </>
  );
};

export default GeneralSellerPage;
