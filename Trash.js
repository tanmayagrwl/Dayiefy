import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ScrollView,
	Image,
} from "react-native";

const img = require("./assets/favicon.png");

export default function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			task: "Do the laundry",
			completed: false,
		},
		{
			id: 2,
			task: "Do the dishes",
			completed: false,
		},
		{
			id: 3,
			task: "Do the homework",
			completed: false,
		},
	]);

	return (
		<ScrollView style={{ backgroundColor: "#D5CCFF" }}>
			<View style={styles.container}>
				<Text style={styles.heading}>Dayiefy</Text>

				{tasks
					w
					.map((task, index) => (
						<View key={task.id} style={styles.box}>
							<Text
								style={[
									styles.taskText,
									task.completed && styles.strikethrough,
								]}
							>
								{task.task}
							</Text>
							<Pressable
								onPress={() => {
									tasks[index].completed = !tasks[index].completed;
									setTasks([...tasks]);
								}}
								style={({ pressed }) => [
									{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
									styles.finishedBox,
								]}
							>
								<Text>Done</Text>
							</Pressable>
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
						</View>
					))}
				{tasks
					.filter((task) => !task.completed)
					.map((task, index) => (
						<View key={task.id} style={styles.box}>
							<Text
								style={[
									styles.taskText,
									task.completed && styles.strikethrough,
								]}
							>
								{task.task}
							</Text>
							<Pressable
								onPress={() => {
									tasks[index].completed = !tasks[index].completed;
									setTasks([...tasks]);
								}}
								style={({ pressed }) => [
									{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
									styles.finishedBox,
								]}
							>
								<Text>Done</Text>
							</Pressable>
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
						</View>
					))}

				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}

const rendexListItems = (tasks, setTasks) => {
	return (
		<View key={task.id} style={styles.box}>
			<Text style={[styles.taskText, task.completed && styles.strikethrough]}>
				{task.task}
			</Text>
			<Pressable
				onPress={() => {
					tasks[index].completed = !tasks[index].completed;
					setTasks([...tasks]);
				}}
				style={({ pressed }) => [
					{ backgroundColor: pressed ? "#ac9ed1" : "lavender" },
					styles.finishedBox,
				]}
			>
				<Text>Done</Text>
			</Pressable>
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
		</View>
	);
};

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
});
