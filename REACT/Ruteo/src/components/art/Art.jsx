import { useNavigate } from'react-router-dom';
import { useParams } from 'react-router-dom';
const listaImg = [
    {
        id: 1231,
        src: 'https://images.pexels.com/photos/2659515/pexels-photo-2659515.jpeg',
    },
    {
        id: 1232,
        src: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 1233,
        src: 'https://images.pexels.com/photos/9761338/pexels-photo-9761338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 1234,
        src: 'https://images.pexels.com/photos/5474031/pexels-photo-5474031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 1235,
        src: 'https://images.pexels.com/photos/8071753/pexels-photo-8071753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 1236,
        src: 'https://images.pexels.com/photos/7662843/pexels-photo-7662843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
];
const Art = ()=>{
    const navegar = useNavigate();
    const id = parseInt(useParams().id);
    const navegacion = (a)=>{
        if(a==='Home'){
            navegar('/Home');
        }else if(a==='Anterior'){
            if(id > 1231){
                navegar(`/Art/${id-1}`);
            }
        }else{
            if(id < 1236){
                navegar(`/Art/${id+1}`);
            }
        }
    };
    const imgActual = listaImg.find(img => img.id === id);
    return (
        <>
        <img src={imgActual.src} />
        <button onClick={()=>navegacion('Anterior')}>Retroceso</button>
        <button onClick={()=>navegacion('Home')}>Home</button>
        <button onClick={()=>navegacion('Siguiente')}>Avance</button>
        </>
    );
};
export default Art;