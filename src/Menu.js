import React from "react"
import './menu.scss'

function Menu() {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <table>
        <tr colspan="3">
          <th class="main">COFFEE</th>
        </tr>
        <tr>
          <th>SR. NO.</th>
          <th>ITEM</th>
          <th>QTY.</th>
          <th>RATE</th>
        </tr>
        <tr>
          <td>01</td>
          <td>AFFOGATO</td>
          <td>01</td>
          <td>$5</td>
        </tr>
        <tr>
          <td>02</td>
          <td>AMERICANO</td>
          <td>01</td>
          <td>$4</td>
        </tr>
        <tr>
          <td>03</td>
          <td>CAFFÈ LATTE</td>
          <td>01</td>
          <td>$6</td>
        </tr>
        <tr>
          <td>04</td>
          <td>CAFFÈ MOCHA</td>
          <td>01</td>
          <td>$8</td>
        </tr>
        <tr>
          <td>05</td>
          <td>CAFÈ AU LAIT</td>
          <td>01</td>
          <td>$7</td>
        </tr>
        <tr colspan="3">
          <th class="main">PASTRIES</th>
        </tr>
        <tr>
          <th>SR. NO.</th>
          <th>ITEM</th>
          <th>QTY.</th>
          <th>RATE</th>
        </tr>
        <tr>
          <td>01</td>
          <td>CROISSANT</td>
          <td>01</td>
          <td>$5</td>
        </tr>
        <tr>
          <td>02</td>
          <td>PIE</td>
          <td>01</td>
          <td>$4</td>
        </tr>
        <tr>
          <td>03</td>
          <td>DANISH</td>
          <td>01</td>
          <td>$6</td>
        </tr>
        <tr>
          <td>04</td>
          <td>MACARON</td>
          <td>01</td>
          <td>$8</td>
        </tr>
        <tr>
          <td>05</td>
          <td>PRETZEL</td>
          <td>01</td>
          <td>$7</td>
        </tr>
      </table>
    </div>
  )
}

export default Menu
