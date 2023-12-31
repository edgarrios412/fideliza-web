import { useState } from "react"
import logo from "../../../assets/icon.png"
import Code from "./Code"
import {useNavigate} from "react-router-dom"

export default () => {
    const [step, setStep] = useState(0)
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    const navigate = useNavigate()

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            {step == 0 && <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={logo} width={100} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Registrate</h3>
                        <p className="">Ya tienes cuenta? <a href="/ingreso" className="font-medium text-indigo-600 hover:text-indigo-500">Ingresa</a></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <div>
                            <label className="text-gray-600">
                                Numero de telefono
                            </label>
                            <div className="relative w-full mt-2 text-gray-500 bg-transparent focus:border-indigo-600 shadow-sm rounded-lg">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>CO</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="3118268264"
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setStep(1)}
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Enviar codigo
                    </button>
                </form>
            </div>}
            {step == 1 && <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    {/* <img src={logo} width={100} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Hemos enviado un codigo a tu telefono</h3>
                        <p className="">Ingresa el codigo a continuacion</p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <Code />
                    <button
                        onClick={() => setStep(2)}
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Enviar
                    </button>
                </form>
                {/* <a href="/ingreso" className="font-medium text-indigo-600 hover:text-indigo-500">No he recibido el codigo</a> */}
            </div>}
            {step == 2 && <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={logo} width={100} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Ingresa tu contraseña</h3>
                        <p className="">Este es el ultimo paso para que puedas acceder a tu cuenta</p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="text-gray-600">
                            Contraseña
                        </label>
                        <div className="relative w-full mt-2 text-gray-500 bg-transparent focus:border-indigo-600 shadow-sm rounded-lg">
                            <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                                onClick={() => setPasswordHidden(!isPasswordHidden)}
                            >
                                {
                                    isPasswordHidden ? (
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>

                                    )
                                }
                            </button>
                            <input
                                type={isPasswordHidden ? "password" : "text"}
                                // placeholder="Ingresa tu contraseña"
                                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </div >
                    <div>
                        <label className="text-gray-600">
                            Repite la contraseña
                        </label>
                        <div className="relative w-full mt-2 text-gray-500 bg-transparent focus:border-indigo-600 shadow-sm rounded-lg">
                            <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                                onClick={() => setPasswordHidden(!isPasswordHidden)}
                            >
                                {
                                    isPasswordHidden ? (
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>

                                    )
                                }
                            </button>
                            <input
                                type={isPasswordHidden ? "password" : "text"}
                                // placeholder="Ingresa nuevamente tu contraseña"
                                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </div >
                    <button
                        onClick={() => navigate("/ingreso")}
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Crear cuenta
                    </button>
                </form>
            </div>}
        </main>
    )
}