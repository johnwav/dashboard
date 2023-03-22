import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={css.durationButton}>
              <select>
                <option value="">1 Week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>cards</div>
        </div>
      </div>

      <div className={css.orders}>orders</div>
    </div>
  );
};

export default Dashboard;
