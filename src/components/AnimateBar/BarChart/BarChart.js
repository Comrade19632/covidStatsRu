
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _Bar = _interopRequireDefault(require('./Bar'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) { return; } const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

const classes = {
  barChart: {
    width: '100%',
    position: 'relative',
  },
  container: {
    width: '100%',
  },
};

const BarChart =
/* #__PURE__ */
(function (_React$Component) {
  _inherits(BarChart, _React$Component);

  function BarChart(props) {
    let _this;

    _classCallCheck(this, BarChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BarChart).call(this, props));

    _defineProperty(_assertThisInitialized(_this), 'componentDidMount', () => {
      if (_this.props.start) {
        const intervalId = setInterval(_this.update, _this.props.timeout + _this.props.delay);

        _this.setState({
          intervalId,
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'componentWillUnmount', () => {
      clearInterval(_this.state.intervalId);
    });

    _defineProperty(_assertThisInitialized(_this), 'update', () => {
      if (_this.state.idx + 1 === _this.props.timeline.length) {
        clearInterval(_this.state.intervalId);
        return;
      }

      _this.setState((prevState) => {
        const _this$sortAxis = _this.sortAxis(prevState.idx + 1);
        const _this$sortAxis2 = _slicedToArray(_this$sortAxis, 2);
        const currRank = _this$sortAxis2[0];
        const maxVal = _this$sortAxis2[1];

        return {
          idx: prevState.idx + 1,
          prevRank: prevState.currRank,
          currRank,
          maxVal,
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'sortAxis', (i, descending) => {
      if (descending === undefined) descending = true;
      let toSort = Object.keys(_this.props.data).map((name) => ({
        name,
        val: _this.props.data[name][i],
      }));
      toSort.sort((left, right) => (descending ? left.val < right.val ? 1 : left.val > right.val ? -1 : 0 : left.val < right.val ? 1 : left.val < right.val ? -1 : 0));
      toSort = toSort.slice(0, _this.maxItems);
      const maxVal = Math.max.apply(Math, toSort.map((item) => item.val));
      return [toSort.reduce((ret, item, idx) => _objectSpread({}, ret, {}, _defineProperty({}, item.name, idx)), {}), maxVal];
    });

    _defineProperty(_assertThisInitialized(_this), 'getInfoFromRank', (name) => {
      const currIdx = _this.state.idx;
      const prevIdx = currIdx > 0 ? currIdx - 1 : 0;
      const value = _this.props.data[name][currIdx];
      const hidden = _this.state.currRank[name] === undefined;

      const currStyle = _objectSpread({}, _this.props.barStyle, {
        marginTop: 'calc('.concat(_this.state.currRank[name], ' * ').concat(_this.barHeight, ')'),
        width: ''.concat(100 * _this.props.data[name][currIdx] / _this.state.maxVal, '%'),
        backgroundColor: _this.props.colors[name],
      });

      const prevStyle = _objectSpread({}, _this.props.barStyle, {
        marginTop: 'calc('.concat(_this.state.prevRank[name], ' * ').concat(_this.barHeight, ')'),
        width: ''.concat(100 * _this.props.data[name][prevIdx] / _this.state.maxVal, '%'),
        backgroundColor: _this.props.colors[name],
      });

      return [value, hidden, currStyle, prevStyle];
    });

    _this.barHeight = 'calc('.concat(props.barStyle.height, ' + ').concat(props.barStyle.marginTop, ')');
    _this.nItmes = Object.keys(_this.props.data).length;
    _this.maxItems = props.maxItems <= _this.nItmes ? props.maxItems : _this.nItmes;
    _this.barChartStyle = {
      height: 'calc('.concat(_this.maxItems, ' * ').concat(_this.barHeight, ')'),
    };

    const _this$sortAxis3 = _this.sortAxis(0);
    const _this$sortAxis4 = _slicedToArray(_this$sortAxis3, 2);
    const initRank = _this$sortAxis4[0];
    const _maxVal = _this$sortAxis4[1];

    _this.state = {
      idx: 0,
      prevRank: initRank,
      currRank: initRank,
      maxVal: _maxVal,
      started: props.start,
    };
    return _this;
  }

  _createClass(BarChart, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.start && !prevProps.start) {
        const intervalId = setInterval(this.update, this.props.timeout + this.props.delay);
        this.setState({
          intervalId,
        });
      }
    },
  }, {
    key: 'render',
    value: function render() {
      const _this2 = this;

      return _react.default.createElement('div', {
        style: classes.container,
      }, _react.default.createElement('div', {
        style: this.props.timelineStyle,
      }, this.props.timeline[this.state.idx]), _react.default.createElement('div', {
        style: _objectSpread({}, classes.barChart, {}, this.barChartStyle),
      }, Object.keys(this.props.data).map((name) => {
        const _this2$getInfoFromRan = _this2.getInfoFromRank(name);
        const _this2$getInfoFromRan2 = _slicedToArray(_this2$getInfoFromRan, 4);
        const value = _this2$getInfoFromRan2[0];
        const hidden = _this2$getInfoFromRan2[1];
        const currStyle = _this2$getInfoFromRan2[2];
        const prevStyle = _this2$getInfoFromRan2[3];

        if (hidden) {
          return _react.default.createElement('div', {
            key: name,
          });
        }
        return _react.default.createElement(_Bar.default, {
          name,
          value,
          label: _this2.props.labels[name],
          currStyle,
          prevStyle,
          key: name,
          timeout: _this2.props.timeout,
          textBoxStyle: _this2.props.textBoxStyle,
          width: _this2.props.width,
        });
      })));
    },
  }]);

  return BarChart;
}(_react.default.Component));

const _default = BarChart;
exports.default = _default;
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXJDaGFydC5qcyJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiYmFyQ2hhcnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiY29udGFpbmVyIiwiQmFyQ2hhcnQiLCJwcm9wcyIsInN0YXJ0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwidXBkYXRlIiwidGltZW91dCIsImRlbGF5Iiwic2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwic3RhdGUiLCJpZHgiLCJ0aW1lbGluZSIsImxlbmd0aCIsInByZXZTdGF0ZSIsInNvcnRBeGlzIiwiY3VyclJhbmsiLCJtYXhWYWwiLCJwcmV2UmFuayIsImkiLCJkZXNjZW5kaW5nIiwidW5kZWZpbmVkIiwidG9Tb3J0IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJtYXAiLCJuYW1lIiwidmFsIiwic29ydCIsImxlZnQiLCJyaWdodCIsInNsaWNlIiwibWF4SXRlbXMiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJpdGVtIiwicmVkdWNlIiwicmV0IiwiY3VycklkeCIsInByZXZJZHgiLCJ2YWx1ZSIsImhpZGRlbiIsImN1cnJTdHlsZSIsImJhclN0eWxlIiwibWFyZ2luVG9wIiwiYmFySGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwicHJldlN0eWxlIiwiaGVpZ2h0Iiwibkl0bWVzIiwiYmFyQ2hhcnRTdHlsZSIsImluaXRSYW5rIiwic3RhcnRlZCIsInByZXZQcm9wcyIsInRpbWVsaW5lU3R5bGUiLCJnZXRJbmZvRnJvbVJhbmsiLCJsYWJlbHMiLCJ0ZXh0Qm94U3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxNQURDO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGLEdB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O0FBRUUsVUFBQSxLQUFLLEVBQUVlLEtBRlQ7QUFHRSxVQUFBLEtBQUssRUFBRSxNQUFJLENBQUN6QyxLQUFMLENBQVcwRCxNQUFYLENBQWtCaEMsSUFBbEIsQ0FIVDtBQUlFLFVBQUEsU0FBUyxFQUFFaUIsU0FKYjtBQUtFLFVBQUEsU0FBUyxFQUFFTSxTQUxiO0FBTUUsVUFBQSxHQUFHLEVBQUV2QixJQU5QO0FBT0UsVUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDMUIsS0FBTCxDQUFXSyxPQVB0QjtBQVFFLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0wsS0FBTCxDQUFXMkQsWUFSM0I7QUFTRSxVQUFBLEtBQUssRUFBRSxNQUFJLENBQUMzRCxLQUFMLENBQVdKO0FBVHBCLFVBREo7QUFhRCxPQWhCRCxDQUZKLENBSkYsQ0FERjtBQTRCRDs7OztFQXRIa0JnRSxrQkFBTUMsUzs7ZUF5SGQ5RCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXIgZnJvbSAnLi9CYXInO1xuXG5jb25zdCBjbGFzc2VzID0ge1xuICBiYXJDaGFydDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH1cbn1cbmNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5iYXJIZWlnaHQgPSBgY2FsYygke3Byb3BzLmJhclN0eWxlLmhlaWdodH0gKyAke3Byb3BzLmJhclN0eWxlLm1hcmdpblRvcH0pYDtcbiAgICAgICAgdGhpcy5uSXRtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aDtcbiAgICAgICAgdGhpcy5tYXhJdGVtcyA9IHByb3BzLm1heEl0ZW1zIDw9IHRoaXMubkl0bWVzID8gcHJvcHMubWF4SXRlbXMgOiB0aGlzLm5JdG1lcztcbiAgICAgICAgdGhpcy5iYXJDaGFydFN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBgY2FsYygke3RoaXMubWF4SXRlbXN9ICogJHt0aGlzLmJhckhlaWdodH0pYCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IFtpbml0UmFuaywgbWF4VmFsXSA9IHRoaXMuc29ydEF4aXMoMCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZHg6IDAsXG4gICAgICAgICAgICBwcmV2UmFuazogaW5pdFJhbmssXG4gICAgICAgICAgICBjdXJyUmFuazogaW5pdFJhbmssXG4gICAgICAgICAgICBtYXhWYWw6IG1heFZhbCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IHByb3BzLnN0YXJ0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnByb3BzLnN0YXJ0KXtcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgdGhpcy5wcm9wcy50aW1lb3V0ICsgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsSWQ6IGludGVydmFsSWR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXJ0ICYmICFwcmV2UHJvcHMuc3RhcnQpIHtcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgdGhpcy5wcm9wcy50aW1lb3V0ICsgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsSWQ6IGludGVydmFsSWR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLmlkeCArIDEgPT09IHRoaXMucHJvcHMudGltZWxpbmUubGVuZ3RoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgbGV0IFtjdXJyUmFuaywgbWF4VmFsXSA9IHRoaXMuc29ydEF4aXMocHJldlN0YXRlLmlkeCArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZHg6IHByZXZTdGF0ZS5pZHggKyAxLFxuICAgICAgICAgICAgICAgIHByZXZSYW5rOiBwcmV2U3RhdGUuY3VyclJhbmssXG4gICAgICAgICAgICAgICAgY3VyclJhbms6IGN1cnJSYW5rLFxuICAgICAgICAgICAgICAgIG1heFZhbDogbWF4VmFsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzb3J0QXhpcyA9IChpLCBkZXNjZW5kaW5nKSA9PiB7XG4gICAgICAgIGlmKGRlc2NlbmRpbmcgPT09IHVuZGVmaW5lZCkgZGVzY2VuZGluZyA9IHRydWU7XG4gICAgICAgIGxldCB0b1NvcnQgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLm1hcChuYW1lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICB2YWw6IHRoaXMucHJvcHMuZGF0YVtuYW1lXVtpXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvU29ydC5zb3J0KChsZWZ0LCByaWdodCkgPT4gZGVzY2VuZGluZyA/IGxlZnQudmFsIDwgcmlnaHQudmFsID8gMTogbGVmdC52YWwgPiByaWdodC52YWwgPyAtMSA6IDAgIDogbGVmdC52YWwgPCByaWdodC52YWwgPyAxIDogbGVmdC52YWwgPCByaWdodC52YWwgPyAtMSA6IDApO1xuICAgICAgICB0b1NvcnQgPSB0b1NvcnQuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcyk7XG4gICAgICAgIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHRvU29ydC5tYXAoaXRlbSA9PiBpdGVtLnZhbCkpO1xuICAgICAgICByZXR1cm4gW3RvU29ydC5yZWR1Y2UoKHJldCwgaXRlbSwgaWR4KSA9PiAoe1xuICAgICAgICAgIC4uLnJldCwgLi4ue1tpdGVtLm5hbWVdOiBpZHh9XG4gICAgICAgIH0pLCB7fSksIG1heFZhbF07XG4gICAgfVxuXG4gICAgZ2V0SW5mb0Zyb21SYW5rID0gbmFtZSA9PiB7XG4gICAgICBjb25zdCBjdXJySWR4ID0gdGhpcy5zdGF0ZS5pZHg7XG4gICAgICBjb25zdCBwcmV2SWR4ID0gKGN1cnJJZHggPiAwID8gY3VycklkeCAtIDEgOiAwKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW25hbWVdW2N1cnJJZHhdO1xuICAgICAgY29uc3QgaGlkZGVuID0gKHRoaXMuc3RhdGUuY3VyclJhbmtbbmFtZV0gPT09IHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBjdXJyU3R5bGUgPSB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuYmFyU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcDogYGNhbGMoJHt0aGlzLnN0YXRlLmN1cnJSYW5rW25hbWVdfSAqICR7dGhpcy5iYXJIZWlnaHR9KWAsXG4gICAgICAgIHdpZHRoOiBgJHsxMDAgKiB0aGlzLnByb3BzLmRhdGFbbmFtZV1bY3VycklkeF0vIHRoaXMuc3RhdGUubWF4VmFsfSVgLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuY29sb3JzW25hbWVdLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHByZXZTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5iYXJTdHlsZSxcbiAgICAgICAgbWFyZ2luVG9wOiBgY2FsYygke3RoaXMuc3RhdGUucHJldlJhbmtbbmFtZV19ICogJHt0aGlzLmJhckhlaWdodH0pYCxcbiAgICAgICAgd2lkdGg6IGAkezEwMCAqIHRoaXMucHJvcHMuZGF0YVtuYW1lXVtwcmV2SWR4XS8gdGhpcy5zdGF0ZS5tYXhWYWx9JWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5jb2xvcnNbbmFtZV0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy50aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVsaW5lW3RoaXMuc3RhdGUuaWR4XX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uY2xhc3Nlcy5iYXJDaGFydCwgLi4udGhpcy5iYXJDaGFydFN0eWxlfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV0gPSB0aGlzLmdldEluZm9Gcm9tUmFuayhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZihoaWRkZW4pIHJldHVybiAoPGRpdiBrZXk9e25hbWV9PjwvZGl2Pik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBjdXJyU3R5bGU9e2N1cnJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGU9e3ByZXZTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17dGhpcy5wcm9wcy50aW1lb3V0fVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3hTdHlsZT17dGhpcy5wcm9wcy50ZXh0Qm94U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcbiJdfQ==
