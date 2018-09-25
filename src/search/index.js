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
        console.log(this.formatEvents(response.data.records))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    return (
      <button type="button" onClick={() => this.getData()}>Hello</button>
    )
  }
}

export default Search
