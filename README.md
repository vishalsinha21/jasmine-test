## Project to demonstrate how to integrate maven with jasmine

- add jasmine plugin to POM

```xml
      <plugin>
        <groupId>com.github.searls</groupId>
        <artifactId>jasmine-maven-plugin</artifactId>
        <version>2.2</version>
        <executions>
          <execution>
            <goals>
              <goal>test</goal>
            </goals>
          </execution>
        </executions>
```

- by default it will look for javascript sources in `src/main/javascript` and specs in `test/main/javascript`

- `mvn clean install` to run build along with jasmine test cases

- `mvn jasmine:bdd` and open localhost:8234 in browser to execute all jasmine test cases



