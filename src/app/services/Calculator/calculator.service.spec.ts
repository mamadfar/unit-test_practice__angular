import {CalculatorService} from "./calculator.service";
import {LoggerService} from "../Logger/logger.service";

describe('CalculatorService', function () {

  it('should add two numbers', function () {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', function () {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    let calculator = new CalculatorService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
