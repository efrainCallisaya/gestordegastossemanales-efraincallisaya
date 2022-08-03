import {Link} from "react-router-dom";
const Registrate = () => {


    return(

        <>
        <div class="container-fluid vh-100" >
            <div class="" >
                <div class="rounded d-flex justify-content-center">
                    <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div class="text-center">
                            <h3 class="text-black">Create Account</h3>
                        </div>
                        <div class="p-4">
                            <form action="">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-person-plus-fill text-white"></i></span>
                                    <input type="text" class="form-control" placeholder="Username"/>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-envelope text-white"></i></span>
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-key-fill text-white"></i></span>
                                    <input type="password" class="form-control" placeholder="password"/>
                                </div>
                                <div class="d-grid col-12 mx-auto">
                                    <button class="btn bg-warning" type="button"><span></span> REGISTRATE</button>
                                </div>
                                <p class="text-center mt-3">Ya tienes cuenta?
                                    <Link to="/inicio" class="text-primary">Inicia Sesion</Link>
                                </p>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Registrate;