export default function formLogin(){
  return(
    <form action="POST" className='flex flex-col'>
      <label htmlFor="email" className='text-black text-md font-light'>Email</label>
      <input type="email" name="email" className='text-lg bg-transparent text-black border border-gray-300 p-2 rounded-lg'/>
      <label htmlFor="password" className='text-black text-md font-light mt-4'>Senha</label>
      <input type="password" name="password" className='text-lg bg-transparent text-black border border-gray-300 p-2 rounded-lg'/> 
      <label htmlFor="password" className='text-black text-md font-light mt-4'>Confirme a senha</label>
      <input type="password" name="password" className='text-lg bg-transparent text-black border border-gray-300 p-2 rounded-lg'/> 
      <input type="submit" value="Entrar" className='bg-primary text-white p-3 rounded mt-5 font-semibold'/>
    </form>
  );
}