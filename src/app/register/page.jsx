
import RegisterForm from '../../../components/registerForm/registerForm'

export default function page() {
  return (

    <div className="flex flex-col items-center w-full h-screen justify-center bg-gray-100">
      <h1 className="text-4xl text-black mb-6 font-bold">New account</h1>
      <RegisterForm />
    </div>
  )
}
