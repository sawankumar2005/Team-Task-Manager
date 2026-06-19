const Task = require("../models/Task");

const getDashboard = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments();

    const pendingTasks = await Task.countDocuments({
      status: "Pending",
    });

    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const inProgressTasks =
      await Task.countDocuments({
        status: "In Progress",
      });

    const overdueTasks =
      await Task.countDocuments({
        dueDate: {
          $lt: new Date(),
        },
        status: {
          $ne: "Completed",
        },
      });

    res.json({
      totalTasks,
      pendingTasks,
      completedTasks,
      inProgressTasks,
      overdueTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};