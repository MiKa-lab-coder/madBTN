import {useState, type Dispatch, type SetStateAction} from 'react'
import './App.css'

type Position = { top: string; left: string };

function App() {
    const [pos1, setPos1] = useState<Position>({top: '40%', left: '40%'});
    const [pos2, setPos2] = useState<Position>({top: '40%', left: '50%'});
    const [count, setCount] = useState(0);

    // Génère une position aléatoire et met à jour l'état du bouton
    const moveRandom = (setter: Dispatch<SetStateAction<Position>>) => {
        const randomTop = Math.floor(Math.random() * 80 + 10) + '%';
        const randomLeft = Math.floor(Math.random() * 80 + 10) + '%';
        setter({top: randomTop, left: randomLeft});
    };

    // Afficher un message après 5 clics sur "yes"
    const handleYesClick = () => {
        setCount(count + 1);
        if (count + 1 >= 5) {
            alert("Effort are appreciated !!! I love you too! ❤️");
            setCount(0);
            setPos1({top: '40%', left: '40%'}); // reset de la position
        } else {
            moveRandom(setPos1);
        }
    };

    // Afficher un message après 10 évitements du bouton "no"
    const handleNoHover = () => {
        setCount(count + 1);
        if (count + 1 >= 10) {
            alert("You can't escape my love! ❤️");
            setCount(0);
            setPos2({top: '40%', left: '50%'}); // reset de la position
        } else {
            moveRandom(setPos2);
        }
    };

    return (
        <div className="h-screen w-screen bg-red-200 overflow-hidden relative font-sans">
            <h1 className="text-red-700 text-center pt-25 text-4xl font-extrabold uppercase tracking-widest opacity-50">
                Do you love me ???
            </h1>

            {/* no : Fuit dès qu'on approche la souris */}
            <button
                onMouseEnter={() => handleNoHover()}
                style={{
                    position: 'absolute',
                    top: pos2.top,
                    left: pos2.left,
                    transition: 'all 0.15s ease-out'
                }}
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full
                  font-bold border-2 border-white/20"
            >
                no
            </button>

            {/* yes: Se téléporte au click, mais affiche un msg au 5em */}
            <button
                onClick={handleYesClick}
                style={{
                    position: 'absolute',
                    top: pos1.top,
                    left: pos1.left,
                    transition: 'all 0.15s ease-out'
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full
                  font-bold border-2 border-white/20"
            >
                yes
            </button>

        </div>
    )
}

export default App;