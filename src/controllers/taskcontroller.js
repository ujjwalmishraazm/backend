import Task from '../models/task.model.js'

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ isArchived: false })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' })
    }

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ message: 'Failed to update status' })
  }
}

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, { isArchived: true })
    res.json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

