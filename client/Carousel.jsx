import React, { Component } from 'react';
import axios from 'axios';
import InfoBox from './components/InfoBox.jsx';
import loading from './components/loading.js';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalId: 38,
      mainItemData: {},
      cookieId: null,
      browserHistory: {},
      itemData: [],
      indexOnScreen: 0,
      itemsRendered: [],
      numOfItemsOnScreen: 0,
      firstIndexOnFlatArrayOfItemOnScreen: null,
      clickStateLeft: 'carouselScrollButton',
      clickStateRight: 'carouselScrollButton',
      hoverStateLeft: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/leftArrowUnclicked.jpg',
      hoverStateRight: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/rightArrowUnclicked.jpg',
      arrows: {
        leftUnclicked: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/leftArrowUnclicked.jpg',
        rightUnclicked: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/rightArrowUnclicked.jpg',
        leftHover: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/leftArrowHover.jpg',
        rightHover: 'https://shazamazon.s3.us-east-2.amazonaws.com/Carousel+Arrows/rightArrowHover.jpg',
      }
    };
    this.getWidth = this.getWidth.bind(this);
  }

  /* /////////////////////// Functions for Mounting Items //////////////////////////
  ///////////////////////////////////////////////////////////////////////////////*/

  componentDidMount() {
    window.addEventListener('resize', this.getWidth);
    window.addEventListener('clickedProduct', this.setGlobalId.bind(this));
    this.getItem();
  }

  setGlobalId (event) {
    this.setState({ globalId: event.detail, numOfItemsOnScreen: 0, itemData: [], indexOnScreen: 0, itemsRendered: [] }, () => {
      this.getItem();
    });
  }

  getItem () {
    axios.get('http://18.191.11.52/item', {
      params: {
        ProductId: this.state.globalId // get global item
      }
    })
      .then(({ data }) => {
        this.setState({ mainItemData: data[0] }, () => {
          this.checkCookies();
        });
      })
      .catch ();
  }

  checkCookies() {
    if (this.state.cookieId !== null) {
      this.getLoading();
      return;
    }
    let cookieSplit = document.cookie.split(';');
    let keyPairSplit = cookieSplit[0].split('=');

    if (document.cookie !== '') {
      this.setState({ cookieId: keyPairSplit[1] }, () => {
        this.getLoading();
      });
    } else {
      this.setCookie();
    }
  }

  setCookie () {
    axios.post('http://18.191.11.52/user', {
      AllProductIds: [this.state.mainItemData.ProductId],
      itemsViewed: {
        ItemName: this.state.mainItemData.ItemName,
        Photo: this.state.mainItemData.Photo,
        ProductId: this.state.mainItemData.ProductId
      }
    })
      .then(({data}) => {
        let today = new Date();
        today.setMonth(today.getMonth() + 1);

        this.setState({cookieId: data});
        document.cookie = `_id=${data}; expires=${today.toUTCString()}`;
        this.getLoading();
      })
      .catch();
  }

  getLoading() {
    let count = Math.floor((window.innerWidth + 50) / 240);
    let result = [];

    for (let i = 0; i < count; i++) {
      result.push(loading);
    }

    this.setState({ itemData: [], itemsRendered: result }, () => {
      this.getHistory();
    });
  }

  getHistory() {
    axios.get('http://18.191.11.52/user', { 
      params: {
        _id: this.state.cookieId
      }
    })
      .then(data => {
        this.setState({ itemData: data.data[0].itemsViewed, browserHistory: data.data[0] }, () => {
          this.updateUser();
        });
      })
      .catch();
  }

  updateUser() {
    let history = this.state.browserHistory.itemsViewed;
    let updatedIds = this.state.browserHistory.AllProductIds;
    if (updatedIds.indexOf(this.state.mainItemData.ProductId) === -1) {
      updatedIds.unshift(this.state.mainItemData.ProductId);
      history.unshift(this.state.mainItemData);
    } else {
      history.splice(updatedIds.indexOf(this.state.mainItemData.ProductId), 1);
      history.unshift(this.state.mainItemData);
      updatedIds.splice(updatedIds.indexOf(this.state.mainItemData.ProductId), 1);
      updatedIds.unshift(this.state.mainItemData.ProductId);
    }
    axios.put('http://18.191.11.52/updateUser', {
      _id: this.state.cookieId,
      itemsViewed: history,
      AllProductIds: updatedIds
    })
      .then(() => {
        this.getWidth();
      })
      .catch();
  }

  getWidth() {
    let count = Math.floor((window.innerWidth + 50) / 180);
    if (count !== this.state.numOfItemsOnScreen) {
      this.setState({ numOfItemsOnScreen: count }, () => this.createDataMatrix());
    }
  }

  createDataMatrix () {
    let copy = this.state.itemData.slice();
    let copyForView = this.state.itemData.slice();
    let flatCopyForView = this.state.itemData.slice().flat();
    let result = [];
    let renderThis = [];

    copy = copy.flat();
    if (copy.indexOf(null) > 0) {
      copy.splice(copy.indexOf(null));
    }

    let emptySpace = copy.length % this.state.numOfItemsOnScreen > 0 ? 
      this.state.numOfItemsOnScreen - copy.length % this.state.numOfItemsOnScreen : 0;

    for (let i = 0; i < emptySpace; i++) {
      copy.push(null);
    }

    while (copy.length > 0) {
      result.push(copy.splice(0, this.state.numOfItemsOnScreen));
    }

    if (this.state.indexOnScreen === 0) {
      renderThis = result[0];
    } else {
      if (this.state.firstIndexOnFlatArrayOfItemOnScreen === null) {
        let firstItem = copyForView[this.state.indexOnScreen][0];
        let firstItemIndex = flatCopyForView.indexOf(firstItem);
        this.setState({ firstIndexOnFlatArrayOfItemOnScreen: firstItemIndex}, () => {
          renderThis = flatCopyForView.slice(firstItemIndex, firstItemIndex + this.state.numOfItemsOnScreen);
          let isLastIndex = false;
          if (this.state.indexOnScreen === this.state.itemData.length - 1) {
            isLastIndex = true;
          }
          this.setState({ itemData: result, itemsRendered: renderThis }, () => {
            if (isLastIndex) {
              this.setState({indexOnScreen: result.length - 1});
            }
          });
        });
        return;
      }
      
      let firstItemIndex = this.state.firstIndexOnFlatArrayOfItemOnScreen;
      renderThis = flatCopyForView.slice(firstItemIndex, firstItemIndex + this.state.numOfItemsOnScreen);
    }
    let isLastIndex = false;
    if (this.state.indexOnScreen === this.state.itemData.length - 1) {
      isLastIndex = true;
    } 

    this.setState({ itemData: result, itemsRendered: renderThis }, () => {
      if (isLastIndex) {
        this.setState({ indexOnScreen: result.length - 1 });
      }
    });
  }

  renderMoreItems (event, direction) {
    this.setState({ firstIndexOnFlatArrayOfItemOnScreen: null }, () => {
      if (direction === 'right') {
        let count = this.state.numOfItemsOnScreen - 1;
        let nextIndex = this.state.indexOnScreen < this.state.itemData.length - 1 ? this.state.indexOnScreen + 1 : 0;

        const cascade = () => {
          let currentRender = this.state.itemsRendered.slice();
          currentRender.splice(count, 1, this.state.itemData[nextIndex][count]);
          count--;
          this.setState({ itemsRendered: currentRender}, () => {
            setTimeout(() => {
              if (count >= 0) {
                cascade();
              } else {
                this.setState({ indexOnScreen: nextIndex });
              }
            }, 35);
          });
        };

        cascade();

      } else {
        let count = 0;
        let nextIndex = this.state.indexOnScreen > 0 ? this.state.indexOnScreen - 1 : this.state.itemData.length - 1;

        const cascade = () => {
          let currentRender = this.state.itemsRendered.slice();
          currentRender.splice(count, 1, this.state.itemData[nextIndex][count]);
          count++;
          this.setState({ itemsRendered: currentRender }, () => {
            setTimeout(() => {
              if (count < this.state.numOfItemsOnScreen) {
                cascade();
              } else {
                this.setState({ indexOnScreen: nextIndex });
              }
            }, 35);
          });
        };

        cascade();
      }
    });
  }

  /* ////////////////////////////// Event Handlers ////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////*/

  leftArrowClick() {
    this.renderMoreItems(null, 'left');
    //if button is reclicked multiple times, this stops the arrow from dancing from the setTimeout
    if (this.state.clickStateLeft === 'carouselArrowGlow') {
      return;
    }
    this.setState({ clickStateLeft: 'carouselArrowGlow' }, () => { 
      setTimeout(() => this.setState({ clickStateLeft: 'carouselScrollButton' }), 3000);
      if (this.state.clickStateRight === 'carouselArrowGlow') {
        this.setState({ clickStateRight: 'carouselScrollButton' });
      } 
    });
  }
  
  rightArrowClick() {
    this.renderMoreItems(null, 'right');
    //if button is reclicked multiple times, this stops the arrow from dancing from the setTimeout
    if (this.state.clickStateRight === 'carouselArrowGlow') {
      return;
    }

    this.setState({ clickStateRight: 'carouselArrowGlow' }, () => {
      setTimeout(() => this.setState({ clickStateRight: 'carouselScrollButton' }), 3000);
      if (this.state.clickStateLeft === 'carouselArrowGlow') {
        this.setState({ clickStateLeft: 'carouselScrollButton' });
      }
    });
  }
  /* ////////////////////////////// Global Functions ////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////*/

  setGlobal(e, id) {
    const event = new CustomEvent('clickedProduct', { detail: id });
    window.dispatchEvent(event);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 70);
  }

  render() {
    return (
      <div>
        <div id="carouselTitleContainer"> 
          <h2 className="carouselTitle">Your Browsing History</h2>
          <p id="carouselPgCount">Page {this.state.indexOnScreen + 1} of {this.state.itemData.length}</p>
        </div>
        <div className="browsingCarouselContainer">
          <div className="browsingCarouselScrollButtonContainerL">
            <img className={this.state.clickStateLeft}
              onMouseEnter={() => this.setState({ hoverStateLeft: this.state.arrows.leftHover })}
              onMouseLeave={() => this.setState({ hoverStateLeft: this.state.arrows.leftUnclicked })}
              onClick={() => this.leftArrowClick()}
              src={this.state.hoverStateLeft}></img>
          </div>
          {this.state.itemsRendered.map((item, index) => {
            if (item === null) {
              return (
                <InfoBox 
                  item={null}
                  key={index}
                />
              );
            } else {
              return (
                <InfoBox 
                  setGlobal={this.setGlobal.bind(this)}
                  item={item} 
                  key={index}
                  nameHover={this.state.nameHover}
                />
              );
            }
          })}
          <div className="browsingCarouselScrollButtonContainerR">
            <img className={this.state.clickStateRight}
              onMouseEnter={() => this.setState({ hoverStateRight: this.state.arrows.rightHover })}
              onMouseLeave={() => this.setState({ hoverStateRight: this.state.arrows.rightUnclicked })}
              onClick={() => this.rightArrowClick()}
              src={this.state.hoverStateRight}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;