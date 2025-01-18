import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem (props) {
    return(
       <Pressable 
       android_ripple={{color: '#210644'}}
       onPress={props.onDeleteItem.bind(this, props.id)}
       style={({pressed}) => pressed && styles.presItem}
       >
         <View style={styles.goalItem}>
            <Text style={styles.goalText} >{props.text}</Text>
         </View> 
       </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      presItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
      }
})

export default GoalItem