import axios from 'axios'
import React, { Component } from 'react'

class Search extends Component {
  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData() {
    const apiUrl = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info'

    axios.get(apiUrl)
      .then((response) => {
        this.formatter(response.data.records)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Formatter
   * @param {Object} data
   */
  formatter(data) {
    console.log(data)
  }

  render() {
    return (
      <button type="button" onClick={() => this.getData()}>Hello</button>
    )
  }
}

export default Search
