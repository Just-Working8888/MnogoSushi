import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: "10px", fontWeight: 'bold', color: 'white' }}>
            <img src="https://mnogosushi.kg/media/logo/mnogo_1.png" width={32} alt="" />
        </Link>
    )
}
export default Logo