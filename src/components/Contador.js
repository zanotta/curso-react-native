import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    
    //DADO, função responsável por alterar o DADO
    const [numero, setNumero] = useState(props.inicial);
    //estado em COMPONENTE FUNCIONAL (e não classe)

    //let numero = props.inicial;

    function inc() {
        setNumero(numero + 1);
    }

    function dec() {
        setNumero(numero - 1);
    }

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+ Mais" onPress={inc} />
            <Button title="- Menos" onPress={dec} />
        </>
    );

}
