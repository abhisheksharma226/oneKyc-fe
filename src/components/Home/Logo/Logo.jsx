import k from "../assets/k.png";

function Logo(){
    return(
        <div className="flex items-center">
                              <p className="text-2xl font-bold">ONE</p>
                              <img src={k} alt="k" className="w-10" />
                              <p className="text-2xl font-bold">YC</p>
                      </div>
    )
}

export default Logo;