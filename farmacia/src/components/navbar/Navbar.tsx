function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-red-500 text-white"
      >
        <div className="container flex justify-between text-lg">
          Farmacia
          <div className="flex gap-4">Perfil Sair</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
