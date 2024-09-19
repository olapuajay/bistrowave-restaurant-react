import React from "react"
import './Reviews.css'
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap'
import Person1 from '../utils/utils/img/person1.jpg'
import Person2 from '../utils/utils/img/person2.jpg'
import Person3 from '../utils/utils/img/person3.jpg'

export function Reviews() {
  return(
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row">
        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorem repellendus, eum culpa quae fugit dolore repudiandae quos dolor nihil quidem atque!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person1 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> Customer Name </CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorem repellendus, eum culpa quae fugit dolore repudiandae quos dolor nihil quidem atque!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person2 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> Customer Name </CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorem repellendus, eum culpa quae fugit dolore repudiandae quos dolor nihil quidem atque!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person3 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> Customer Name </CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}