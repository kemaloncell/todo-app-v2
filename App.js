import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState('')
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals, 
        { text: enteredGoalText, id: Math.random().toString()},
      ]);
      endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
 }

  return (
    <View style={styles.AppContainer}>
       <Button
          title='Add a new goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
       />       
       {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}  />}
        <View style={styles.goalsContainer}>
          <FlatList 
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return(
              <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          />
        </View> 
    </View>
  );
}
 
const styles = StyleSheet.create({
  AppContainer: {
   flex: 1,
   paddingTop: 50,
   paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4
  },
});
