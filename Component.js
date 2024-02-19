export default function Component({task, index, tasks, setTasks}) {
	return (
		<>
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
					styles.finishedBox,www
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
		</>
	);
}
