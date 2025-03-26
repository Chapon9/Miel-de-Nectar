function register() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Inscription</h1>
      <div className="flex flex-col items-center justify-center">
        <form className="w-80">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="email" className="block text-left">Adresse email</label>
              <input type="email" id="email" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-left">Mot de passe</label>
              <input type="password" id="password" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="password-confirm" className="block text-left">Confirmer le mot de passe</label>
              <input type="password" id="password-confirm" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-left">Adresse</label>
              <input type="text" id="address" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-left">Ville</label>
              <input type="text" id="city" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="zip" className="block text-left">Code postal</label>
              <input type="text" id="zip" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-left">Téléphone</label>
              <input type="text" id="phone" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="conditions" className="block text-left">J'accepte les conditions d'utilisation</label>
              <input type="checkbox" id="conditions" />
            </div>
            <button className="w-full p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">S'inscrire</button>
            <p>
              <a href="/login" className="text-yellow-500 hover:underline">Vous avez déjà un compte ?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;