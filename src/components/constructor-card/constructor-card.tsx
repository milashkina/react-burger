import style from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useRef} from "react";
import {DropTargetMonitor, useDrag, useDrop, XYCoord} from "react-dnd";
import {DND_TYPES} from "../../utils/constant";
import {useDispatch} from "react-redux";
import {SORT_CARD} from "../../services/actions/burger-constructor";
import {TConstructorIngredient, TIngredientData} from "../../types/types";


interface IConstructorCard {
  elem: TIngredientData,
  index: number,
  deleteIngredientFromConstructor: any,
}
export const ConstructorCard: FC<IConstructorCard> = ({elem, index, deleteIngredientFromConstructor }) => {
  const {name, price, image} = elem
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: DND_TYPES.SORTING_CARD,
    hover: (item: TConstructorIngredient, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      // @ts-ignore
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      // @ts-ignore
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      dispatch({
        type: SORT_CARD,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      })
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const[{ isDragging },drag] = useDrag({
    type: DND_TYPES.SORTING_CARD,
    item: (): {index: number} => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })

  const opacity: 0 | 1 = isDragging ? 0 : 1

  drag(drop(ref))

  return (
    <div ref={ref} className={`${style.wrapperConstructor}`} style={{ opacity }}>
      <div>
        <DragIcon type="primary"/>
      </div>
      <ConstructorElement
        text={name || ''}
        price={price}
        thumbnail={image}
        handleClose={() => deleteIngredientFromConstructor(elem)}
      />
    </div>
  )
}

