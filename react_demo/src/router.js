import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin'
import Common from './pages/common'
import Buttons from './pages/ui/button/button'
import Home from './pages/home/home'
import Modals from './pages/ui/modals/modals'
import Spins from './pages/ui/Spin/Spin'
import Notifications from './pages/ui/notification/notification'
import Messages from './pages/ui/message/message'
import Carousels from './pages/ui/carousel/carousel'
import Tablebasic from './pages/ui/tablebasic/tablebasic'
import Tablehigh from './pages/ui/tablehigh/tablehigh'
import Tab from './pages/ui/tab/tab'
import City from './pages/city/city'
import RichEditor from './pages/rich/rich'
import Order from './pages/order/order'
import Gallery from './pages/ui/gallery/gallery'
import OrderDetail from './pages/order/orderdetail'
import Users from './pages/user/user'
import BarCharts from "./pages/charts/barcharts";
import PieCharts from "./pages/charts/piecharts";
import Sunburst from "./pages/charts/sunburst";
import LineCharts from "./pages/charts/linecharts";
import Nomatch from './pages/noMatch/nomatch'


export default class Irouter extends React.Component {
	render() {
		return (
			<Router>
				<App>
					<Switch>
						<Route
							path="/common"
							render={() => (
								<Common>
									<Route
										path="/common/order/detail/:orderId"
										component={OrderDetail}
									/>
								</Common>
							)}
						/>
						<Route
							path="/"
							render={() => {
								return (
									<Admin>
										<Switch>
											<Route
												exact
												path="/home"
												component={Home}
											></Route>
											<Route
												path="/home/ui/buttons"
												component={Buttons}
											/>
											<Route
												path="/home/ui/modals"
												component={Modals}
											/>
											<Route
												path="/home/ui/loading"
												component={Spins}
											/>
											<Route
												path="/home/ui/notification"
												component={Notifications}
											/>
											<Route
												path="/home/ui/message"
												component={Messages}
											/>
											<Route
												path="/home/ui/tabs"
												component={Tab}
											/>
											<Route
												path="/home/ui/carousel"
												component={Carousels}
											/>
											<Route
												path="/home/ui/gallery"
												component={Gallery}
											/>
											<Route
												path="/home/table/basic"
												component={Tablebasic}
											/>
											<Route
												path="/home/table/high"
												component={Tablehigh}
											/>
											<Route
												path="/home/city"
												component={City}
											/>
											<Route
												path="/home/rich"
												component={RichEditor}
											/>
											<Route
												path="/home/order"
												component={Order}
											/>
											<Route
												path="/home/charts/bar"
												component={BarCharts}
											></Route>
											<Route
												path="/home/charts/pie"
												component={PieCharts}
											></Route>
											<Route
												path="/home/charts/sunburst"
												component={Sunburst}
											></Route>
											<Route
												path="/home/charts/line"
												component={LineCharts}
											></Route>
											<Route
												path="/home/user"
												component={Users}
											/>
											<Route component={Nomatch}></Route>
										</Switch>
									</Admin>
								)
							}}
						/>
					</Switch>
				</App>
			</Router>
		)
	}
}
