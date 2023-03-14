const SliderHandle = ({
  isDragStarted = false,
  positionLeft,
  onDragStop,
  onDragStart,
  elementRefference
}) => (
  <span
    onMouseDown={ onDragStart }
    style={{ left: positionLeft }}
    onMouseUp={ onDragStop }
    ref={ elementRefference }
    className={ `cd-handle ${ isDragStarted && 'draggable' }` }>
  </span>
);

export default SliderHandle;