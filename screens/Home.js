import * as React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TodoList from "../components/TodoList";
import {todosData} from "../data/todos";
import {Feather} from "@expo/vector-icons";


export default function Home() {

    let data = todosData.sort((itemOne, itemTwo) => {
        return itemOne.isCompleted - itemTwo.isCompleted
    })

    const [localData, setLocalData] = React.useState(
        data
    );

    const [isHidden, setIsHidden] = React.useState(false);

    const handleHidePress = () => {
        if (isHidden) {
            setIsHidden(false)
            setLocalData(data)
            return
        }
        setIsHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    }

    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://media-exp1.licdn.com/dms/image/C5603AQG_q5BWShIb_A/profile-displayphoto-shrink_200_200/0/1611847931174?e=1656547200&v=beta&t=C3OdfY3H4eY3g-72ZLvJannpRiJlhbd9uh6FfoUHVGQ'}}
                style={styles.pic}/>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.title}><Feather name="chevron-right" size={24} color="black"/> Today</Text>
                <TouchableOpacity onPress={handleHidePress}>
                    <Text style={{
                        color: '#3478f6',
                        fontWeight: 'bold'
                    }}>{isHidden ? 'Show completed' : 'Hide completed'}</Text>
                </TouchableOpacity>
            </View>
            <TodoList todosData={localData.filter(item => item.isToday)}/>

            <Text style={styles.title}><Feather name="chevron-right" size={24} color="black"/> Tomorrow</Text>
            <TodoList todosData={localData.filter(item => !item.isToday)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 15
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 35,
    }
});