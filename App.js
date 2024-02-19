import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ScrollView,
	Image,
	TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const img = require("./assets/favicon.png");

export default function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			task: "Let's Start your day",
			completed: false,
		},
		
	]);
	const [newTask, setNewTask] = useState(" ");

	return (
		<ScrollView style={{ backgroundColor: "#D5CCFF" }}>
			<View style={styles.container}>
				<Text style={styles.heading}>Dayiefy</Text>

				<SafeAreaView style={styles.box}>
					<TextInput
						style={styles.input}
						placeholder="Enter your task"
						value={newTask}
						onChangeText={(text) => setNewTask(text)}
					/>
					<Pressable
						style={({ pressed }) => [
							{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
							styles.deleteBox,
						]}
						onPress={() => {
							setTasks(prevTasks => [
								...prevTasks,
								{
									id: prevTasks.length + 1,
									task: newTask,
									completed: false,
								},
							]);
							setNewTask(''); // Clear the input field
						}}
					>
						<Text>Add task</Text>
					</Pressable>
				</SafeAreaView>

				{tasks.map((task, index) => (
					<View key={task.id} style={styles.box}>
						<Text
							style={[styles.taskText, task.completed && styles.strikethrough]}
						>
							{task.task}
						</Text>
						<Pressable
							style={({ pressed }) => [
								{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
								styles.deleteBox,
							]}
							onPress={() => {
								const updatedTasks = tasks.filter(
									(value, _, arr) => value !== arr[index],
								);
								console.log(updatedTasks);
								setTasks(updatedTasks);
							}}
						>
							<Text>Delete</Text>
						</Pressable>

						<Pressable
							onPress={() => {
								// const updatedTasks = tasks.map((value, i) => {
								// 	if (i === index) {
								// 		return { ...value, completed: !value.completed };
								// 	}
								// 	return value;
								// });
								// setTasks(updatedTasks);
								// another
								tasks[index].completed = !tasks[index].completed;
								setTasks([...tasks]);
								const updatedTasks = tasks.filter(
									(tasks, _, arr) => tasks.completed === true,
								);
								const notUpdatedTasks = tasks.filter(
									(tasks, _, arr) => tasks.completed === false,
								);

								setTasks([...notUpdatedTasks, ...updatedTasks]);
							}}
							style={({ pressed }) => [
								{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
								styles.finishedBox,
							]}
						>
							<Text>Done</Text>
						</Pressable>
					</View>
				))}

				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D5CCFF",
		alignItems: "center",
		paddingTop: 100,
	},
	heading: {
		fontSize: 30,
		color: "#2B1887",
		fontWeight: "bold",
		fontFamily: "Roboto",
		textDecorationLine: "underline",
		paddingBottom: 20,
	},
	box: {
		flexDirection: "row",
		alignItems: "center",
		width: "90%",
		height: 100,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		justifyContent: "space-between",
		marginBottom: 10,
	},
	deleteBox: {
		marginRight: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
	},
	taskText: {
		flex: 1,
		textAlign: "center",
	},
	finishedBox: {
		marginLeft: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
	},
	scview: {
		width: "100%",
	},
	strikethrough: {
		textDecorationLine: "line-through",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 2,
		width: "70%",
		borderRadius: 10,
		padding: 10,
	},
});
