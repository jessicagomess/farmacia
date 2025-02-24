function Home() {
  return (
    <>
      <div className="bg-white-500 flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">
              Cuidando da sua saúde com confiança e praticidade, onde você
              estiver.
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded black-white 
                                          border-red border-solid border-2 py-2 px-4"
              >
                Comprar
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/free-vector/flat-national-doctor-s-day-illustration-with-medic-first-aid-box_23-2149437384.jpg?t=st=1740422810~exp=1740426410~hmac=bf89763739ca151a4e16ba8564f0b8f994a7199189ede115d48e6bdd35d15109&w=740"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
