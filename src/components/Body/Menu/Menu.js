import React, { Component } from 'react'
import MenuList from './MenuList'
import { menuInfo } from '../../../data/Info'
export class Menu extends Component {
    state={
        menu : menuInfo
    }


    deleteBook = index =>{
        //console.log(index)
        const copy_menu = [...this.state.menu]
        copy_menu.splice(index, 1);
        this.setState({
            menu :copy_menu
        })
    }
    

    render() {
        //console.log(this.state.menu)

        const menus = this.state.menu.map((item , index)=>{
            return(
                <MenuList
                    key={index}
                    menu={item}
                    delMenu={ () =>this.deleteBook(index) }
                />
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menus}
                </div> 
            </div>
        )
    }
}

export default Menu
