

export const getDashboardData = async (req, res) => {
  try {
    // Final Response
    res.json({
      data:"This is DashboardData"
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
