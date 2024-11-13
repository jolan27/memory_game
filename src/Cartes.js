import './App.css';

const Cartes = (props) => {
    return (
        <div className="card">
            {props.value};
            {/* {props.clicked}; */}
        </div>
    );
};

export default Cartes;